export type Comment = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};

export type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

export type PostWithComments = Post & {
	comments: Comment[];
};
