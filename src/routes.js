
import App from './components/app';
import Ask from './components/ask';
import Answer from './components/answer';

export const routes = [
		{ path: '/',       component: App },
		{ path: '/ask',    component: Ask },
		{ path: '/answer', component: Answer },
];