/**
 * 为类库提供状态管理
 */
import { ref, type Ref } from 'vue';

export interface EditorState {
	// 当前点击的组件ID
	currentActivedComponent: string | null;
	// 当前鼠标悬停的组件ID
	currentMouseoveredComponent: string | null;
}

const initialStore: EditorState = {
	currentActivedComponent: null,
	currentMouseoveredComponent: null,
};

class EditorStore {
	constructor(public state: Ref<EditorState> = ref(initialStore)) {}
}

export default EditorStore;
