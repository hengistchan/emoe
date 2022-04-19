import EditorStore, { type EditorState } from './../store/index';
import { InjectionKey, markRaw, reactive, type App } from 'vue';

export interface Editor {
	store: EditorStore;
}

const initEditor: () => Editor = () => ({
	store: new EditorStore(),
});

const editorSymbol = Symbol.for('$$editor') as InjectionKey<Editor>;

const createEditor = () => {
	const initData = initEditor();
	const install = (app: App) => {
		app.config.globalProperties.$$editor = initData;
		app.provide(editorSymbol, initData);
		// @ts-ignore
		globalThis.$$editor = initData;
	};
	return { install };
};

export { createEditor };
