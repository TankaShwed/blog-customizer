import clsx from 'clsx';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import { OptionType } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';

const fontOptions: OptionType[] = [
	{title: 'Open Sans', value: 'openSans', className: ''},
	{title: 'Ubuntu', value: 'ubuntu', className: ''},
	{title: 'Cormorant Garamond', value: 'cormorantGaramond', className: ''},
	{title: 'Days One', value: 'daysOne', className: ''},
	{title: 'Merriweather', value: 'merriweather', className: ''}
]

const fontSizeOptions: OptionType[] = [
	{title: '18 PX', value: '18px', className: ''},
	{title: '25 PX', value: '25px', className: ''},
	{title: '38 PX', value: '38px', className: ''},
]

const fontColorOptions: OptionType[] = [
	{title: 'Чёрный', value: 'Чёрный', className: ''},
	{title: 'Белый', value: 'Белый', className: ''},
	{title: 'Серый', value: 'Серый', className: ''},
	{title: 'Розовый', value: 'Розовый', className: ''},
	{title: 'Ярко-розовый', value: 'Розовый', className: ''},
	{title: 'Жёлтый', value: 'Розовый', className: ''},
	{title: 'Зелёный', value: 'Розовый', className: ''},
	{title: 'Голубой', value: 'Розовый', className: ''},
	{title: 'Фиолетовый', value: 'Розовый', className: ''},
]

const backgroundColorOptions: OptionType[] = [
	{title: 'Чёрный', value: 'Чёрный', className: ''},
	{title: 'Белый', value: 'Белый', className: ''},
	{title: 'Серый', value: 'Серый', className: ''},
	{title: 'Розовый', value: 'Розовый', className: ''},
	{title: 'Ярко-розовый', value: 'Розовый', className: ''},
	{title: 'Жёлтый', value: 'Розовый', className: ''},
	{title: 'Зелёный', value: 'Розовый', className: ''},
	{title: 'Голубой', value: 'Розовый', className: ''},
	{title: 'Фиолетовый', value: 'Розовый', className: ''},
]

const widthContentOptions: OptionType[] = [
	{title: 'Широкий', value: 'Широкий', className: ''},
	{title: 'Узкий', value: 'Узкий', className: ''},
]

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleForm = () => {
		setIsOpen(!isOpen);
	};

	const [font, setFont] = useState<OptionType>(fontOptions[0]);
	const [fontSize, setFontSize] = useState<OptionType>(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState<OptionType>(fontColorOptions[0]);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(backgroundColorOptions[0]);
	const [widthContent, serWidthContent] = useState<OptionType>(widthContentOptions[0]);

	return (
		<>
			<ArrowButton isOpen={isOpen} toggleForm={toggleForm} />

			<aside className={clsx(styles.container, {[styles.container_open] : isOpen})}>
				<form className={styles.form}>

					<h2 className='H2'>Задайте параметры</h2>
					<Select selected={font} options={fontOptions} onChange={setFont} title="шрифт"/>
					<RadioGroup name='' options={fontSizeOptions} selected={fontSize} onChange={setFontSize} title={"размер шрифта"} />
					<Select selected={fontColor} options={fontColorOptions} onChange={setFontColor} title="цвет шрифта"/>

					<Separator/>
					<Select selected={backgroundColor} options={backgroundColorOptions} onChange={setBackgroundColor} title="цвет фона"/>
					<Select selected={widthContent} options={widthContentOptions} onChange={serWidthContent} title="ширина контента"/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
