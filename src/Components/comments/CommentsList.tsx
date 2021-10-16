import { commentsOperations, commentsSelectors } from '../../redux/comments';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsListStyled } from './CommentsListStyled';
import { useEffect, useState } from 'react';
import CommentsListItem from './commentsItem/CommentsListItem';
import { useParams } from 'react-router-dom';
import { ICommentItem } from '../../redux/comments/comments-interfaces';

const CommentsList = () => {
  const { id }: any = useParams();
  const comments = useSelector(commentsSelectors.getComments);
  const [filteredComments, setFilteredComments] = useState<ICommentItem[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentsOperations.getComments());
  }, [dispatch]);
  useEffect(() => {
    setFilteredComments(
      comments.filter((item) => Number(item.postId) === Number(id))
    );
  }, [comments, id]);
  return (
    <>
      {filteredComments.length ? (
        <CommentsListStyled>
          {filteredComments.map((item) => (
            <CommentsListItem key={item.id} comment={item} />
          ))}
        </CommentsListStyled>
      ) : (
        <p>No Comments here ...</p>
      )}
    </>
  );
};

export default CommentsList;
