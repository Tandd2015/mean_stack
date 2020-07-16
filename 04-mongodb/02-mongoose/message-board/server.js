const session= require('express-session');
    flash= require('express-flash');
    bodyParser= require('body-parser');
    express= require('express');
    path= require('path');
    mongoose= require('mongoose');
    port= process.env.PORT || 8000;
    app= express();
    expireSession= 600000;
    
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/MessageSchemaDB', {useNewUrlParser: true, useUnifiedTopology: true});

const CommentSchema= new mongoose.Schema({
    author: {
        type: String,
        required: [true, 'Comment Name Input is a required field must not be blank.'], 
        minlength: [3, 'Comment Name Input must be longer than 3 characters.'],
        maxlength: [33, 'Comment Name Input must not be longer than 3 characters.'],
        trim: true
    },
    comments: {
        type: String,
        required: [true, 'Comment Input is a required field must not be blank.'],
        minlength: [3, 'Comment Input must be longer than 3 characters.'],
        maxlength: [33, 'Comment Input must not be longer than 3 characters.'],
        trim: true
    },
    // message: {type: mongoose.Schema.Types.ObjectId, ref: "Message"}
},{timestamps: true});

const MessageSchema= new mongoose.Schema({
    author: {
        type: String,
        required: [true, 'Message Name Input is a required field must not be blank.'], 
        minlength: [3, 'Message Name Input must be longer than 3 characters.'],
        maxlength: [33, 'Message Name Input must not be shorter than 33 characters.'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Message Input is a required field must not be blank.'],
        minlength: [3, 'Message Input must be longer than 3 characters.'],
        maxlength: [33, 'Message Input must not be shorter than 33 characters.'],
        trim: true
    },
    comments: [CommentSchema]
},{timestamps: true});

const Message= mongoose.model('Message', MessageSchema);
const Comment= mongoose.model('Comment', CommentSchema);

app.use(flash());
app.use(session({
    secret: "HereStillHangingOn",
    resave: false,
    saveUninitialized: true,
    cookie: {expireSession}
}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response)=>{
    Message.find({}).sort({createdAt: 'desc'})
    .then(messageLibrary=>{console.log("stage 111111111111111111111111111111111111111111111", messageLibrary)
        response.render('index', {messageLibrary})})
    .catch(error=>{console.log("stage 222222222222222222222222222222222222222222222", error)});
});

app.post('/message', (request, response)=>{
    const message= new Message();
    message.author= request.body.messageNameInput;
    message.message= request.body.messageMessageInput;
    message.comments= [];
    message.save()
    .then(message =>{console.log("stage 333333333333333333333333333333333333333333333", message)
        response.redirect('/')})
    .catch(error=>{console.log("stage 444444444444444444444444444444444444444444444", error)
        for(let index in error.errors){
            request.flash('messageError', error.errors[index].message);}response.redirect('/')})
});

app.post('/comment/:id', (request, response)=>{
    const comment= new Comment();
    comment.author= request.body.commentNameInput;
    comment.comments= request.body.commentCommentInput;
    comment.save()
    const messageId= request.params.id;
    Message.findOne({_id: messageId})
    .then(message => {console.log("stage 666666666666666666666666666666666666666666666", message)
        message.comments.push(comment)
        return message.save()
        .then(()=>response.redirect('/'))})
        .catch(error=>{console.log("stage 777777777777777777777777777777777777777777777", error)
            console.log(comment)    
            for(let index in error.errors){
                request.flash('commentError', error.errors[index].message);}response.redirect('/')})
});

app.listen(port, ()=> console.log('Daniel is Learning More than he ever phantomed on this 8000 port of course'))