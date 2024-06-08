import clsx from 'clsx';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import { OptionType } from 'src/constants/articleProps';
import { Select } from '../select';

import styles from './ArticleParamsForm.module.scss';

const fontOptions: OptionType[] = [
	{title: 'Open Sans', value: 'openSans', className: ''},
	{title: 'Ubuntu', value: 'ubuntu', className: ''},
	{title: 'Cormorant Garamond', value: 'cormorantGaramond', className: ''},
	{title: 'Days One', value: 'daysOne', className: ''},
	{title: 'Merriweather', value: 'merriweather', className: ''}
]

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleForm = () => {
		setIsOpen(!isOpen);
	};

	const [font, setFont] = useState<OptionType>(fontOptions[0]);

	return (
		<>
			<ArrowButton isOpen={isOpen} toggleForm={toggleForm} />

			<aside className={clsx(styles.container, {[styles.container_open] : isOpen})}>
				<form className={styles.form}>

					<h2 className='H2'>Задайте параметры</h2>
					<Select selected={font} options={fontOptions} onChange={setFont} title="шрифт"/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
