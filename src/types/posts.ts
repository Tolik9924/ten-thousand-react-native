export type Comment = {
	postId: string;
	id: string;
	name: string;
	email: string;
	body: string;
};

export type Post = {
	id: string;
	body: string;
	title: string;
	userId: string;
	comments: Comment[];
};
