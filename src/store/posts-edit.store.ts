import { create } from 'zustand';

type EditState = {
	editingPostId: number | null;
	draftTitle: string;
	draftBody: string;

	startEdit: (post: { id: number; title: string; body: string }) => void;
	cancelEdit: () => void;
	setDraftTitle: (title: string) => void;
	setDraftBody: (body: string) => void;
};

export const usePostsEditStore = create<EditState>((set) => ({
	editingPostId: null,
	draftTitle: '',
	draftBody: '',

	startEdit: (post) =>
		set({
			editingPostId: post.id,
			draftTitle: post.title,
			draftBody: post.body
		}),

	cancelEdit: () =>
		set({
			editingPostId: null,
			draftTitle: '',
			draftBody: ''
		}),

	setDraftTitle: (title) => set({ draftTitle: title }),
	setDraftBody: (body) => set({ draftBody: body })
}));

