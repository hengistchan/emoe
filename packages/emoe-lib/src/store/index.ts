/**
 * 为类库提供状态管理
 */
import { ref, type Ref } from 'vue';

export interface InitialStore {
	// 当前点击的组件ID
	currentActivedComponent: string | null;
	// 当前鼠标悬停的组件ID
	currentMouseoveredComponent: string | null;
}

const initialStore: InitialStore = {
	currentActivedComponent: null,
	currentMouseoveredComponent: null,
};

class Store {
	constructor(public storeData: Ref<InitialStore> = ref(initialStore)) {}
}

export default Store;
