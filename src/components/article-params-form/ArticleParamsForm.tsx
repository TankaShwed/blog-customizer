import clsx from 'clsx';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import {
	backgroundColors,
	contentWidthArr,
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

export const ArticleParamsForm = (props: TProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleForm = () => {
		setIsOpen(!isOpen);
	};

	const [font, setFont] = useState<OptionType>(fontFamilyOptions[0]);
	const [fontSize, setFontSize] = useState<OptionType>(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState<OptionType>(fontColors[0]);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		backgroundColors[0]
	);
	const [widthContent, serWidthContent] = useState<OptionType>(
		contentWidthArr[0]
	);

	const apply = () => {
		setIsOpen(false);
		props.onApply(
			font.value,
			fontSize.value,
			fontColor.value,
			backgroundColor.value,
			widthContent.value
		);
	};

	const reset = () => {
		setFont(fontFamilyOptions[0]);
		setFontSize(fontSizeOptions[0]);
		setFontColor(fontColors[0]);
		setBackgroundColor(backgroundColors[0]);
		serWidthContent(contentWidthArr[0]);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} toggleForm={toggleForm} />

			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Text as='h3' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						selected={font}
						options={fontFamilyOptions}
						onChange={setFont}
						title='шрифт'
					/>
					<RadioGroup
						name=''
						options={fontSizeOptions}
						selected={fontSize}
						onChange={setFontSize}
						title={'размер шрифта'}
					/>
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={setFontColor}
						title='цвет шрифта'
					/>
					<Separator />
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}
						title='цвет фона'
					/>
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
		</>
	);
};
