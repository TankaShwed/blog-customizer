import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [fontFamily, setFontFamily] = useState<string>(
		defaultArticleState.fontFamilyOption.value
	);

	const [fontSize, setFontSize] = useState<string>(
		defaultArticleState.fontSizeOption.value
	);

	const [fontColor, setFontColor] = useState<string>(
		defaultArticleState.fontColor.value,
	);

	const [backgroundColor, setBackGroundColor] = useState<string>(
		defaultArticleState.backgroundColor.value
	);

	const [widthContent, setWidthContent] = useState<string>(
		defaultArticleState.contentWidth.value
	);

	const onSettingsChange = (fontValue: string, sizeValue: string, fontColorValue: string, bgColorValue: string, widthValue: string) => {
		setFontFamily(fontValue);
		setFontSize(sizeValue);
		setFontColor(fontColorValue);
		setBackGroundColor(bgColorValue);
		setWidthContent(widthValue);
	};

	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': fontFamily,
					'--font-size': fontSize,
					'--font-color':fontColor,
					'--container-width': widthContent,
					'--bg-color': backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm onApply={onSettingsChange} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
