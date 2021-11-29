import SendIcon from "@material-ui/icons/Send";
import { TextField, Button } from "@material-ui/core";
import svcPosts, { addComment } from "../../../Services/posts.services";
import { useUserContext } from "../../../contexts/UserContext";
import { useState } from "react";

function InputText({ comments, setComments, idPost }) {
  const [commentValue, setCommentValue] = useState("");
  const { token } = useUserContext();

  const onCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const onSendComment = async (e) => {
    e.preventDefault();
    const newComment = {
      description: commentValue,
    };
    addComment(newComment, token, idPost).then((response) => {
      console.log(response);
      setComments([
        ...comments,
        { ...newComment, user: { username: "gp36_user" } },
      ]);
    });

    setCommentValue("");
  };

  return (
    <form
      className="postComment_box flex max-w-4xl mx-auto mt-5 mb-20 p-2"
      onSubmit={onSendComment}
    >
      <TextField
        label="add comment"
        size="small"
        variant="outlined"
        className="post_input flex-1"
        value={commentValue}
        onChange={onCommentChange}
      />
      <Button
        className="animate-none"
        variant="contained"
        size="small"
        endIcon={<SendIcon />}
      ></Button>
    </form>
  );
}

export default InputText;
