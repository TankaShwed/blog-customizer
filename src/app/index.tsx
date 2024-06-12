import { CSSProperties, useState } from 'react';
import { Article } from '../app/components/article/Article';
import { ArticleParamsForm } from '../app/components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../app/constants/articleProps';

import '../styles/index.scss';
import styles from '../styles/index.module.scss';

export const App = () => {
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