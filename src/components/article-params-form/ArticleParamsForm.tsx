import clsx from 'clsx';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';

type TProps = {
	onApply: (
		fontClass: string,
		fontSize: string,
		fontColor: string,
		backgroundColor: string,
		widthContent: string
	) => void;
};

const Spacing = () => <div className={styles.spacing} />;

export const ArticleParamsForm = (props: TProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); //djeneric?
	const toggleForm = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const [font, setFont] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [fontSize, setFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [fontColor, setFontColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);
	const [widthContent, serWidthContent] = useState<OptionType>(
		defaultArticleState.contentWidth
	);

	const apply = () => {
		setIsMenuOpen(false);
		props.onApply(
			font.value,
			fontSize.value,
			fontColor.value,
			backgroundColor.value,
			widthContent.value
		);
	};

	const reset = () => {
		setFont(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		serWidthContent(defaultArticleState.contentWidth);
	};

	const overlayClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} toggleForm={toggleForm} />

			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form}>
					<Text as='h3' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Spacing />
					<Select
						selected={font}
						options={fontFamilyOptions}
						onChange={setFont}
						title='шрифт'
					/>
					<Spacing />
					<RadioGroup
						name=''
						options={fontSizeOptions}
						selected={fontSize}
						onChange={setFontSize}
						title={'размер шрифта'}
					/>
					<Spacing />
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={setFontColor}
						title='цвет шрифта'
					/>
					<Spacing />
					<Separator />
					<Spacing />
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}
						title='цвет фона'
					/>
					<Spacing />
					<Select
						selected={widthContent}
						options={contentWidthArr}
						onChange={serWidthContent}
						title='ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={reset} />
						<Button title='Применить' type='button' onClick={apply} />
					</div>
				</form>
			</aside>
			{isMenuOpen && <div className={styles.overlay} onClick={overlayClick} />}
		</>
	);
};
