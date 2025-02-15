package mesbiens.community.post.service;

import java.util.List;

import mesbiens.community.post.vo.PostCommentRequestDTO;
import mesbiens.community.post.vo.PostCommentVO;

public interface PostCommentService {

	PostCommentVO createComment(PostCommentRequestDTO postCommentRequestDTO); // 댓글 생성

	PostCommentVO getCommentById(int postCommentNo); // 댓글 조회

	PostCommentVO updateComment(PostCommentVO existingComment); // 댓글 수정

	void deleteComment(int postCommentNo); // 댓글 삭제

	List<PostCommentRequestDTO> getCommentsByPostNo(int postNo);

}
