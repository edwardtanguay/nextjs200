import React from 'react';
import axios from 'axios';
import { Noun } from '../../../typings';
import Link from 'next/link';

const url = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

type PageProps = {
	params: {
		id: string;
	};
};

async function Noun({ params: { id } }: PageProps) {
	const nouns: Noun[] = (await axios.get(url)).data;
	const rawNoun: Noun | undefined = nouns.find((m) => m.singular === id);
	let noun: Noun = {
		singular: '',
		plural: '',
		article: ''
	};
	if (rawNoun != undefined) {
		noun = rawNoun;
	}
	return (
		<div className="noun" key={noun.singular}>
			<div className="singular">
				{noun.article} {noun.singular} <span>({noun.plural})</span>{' '}
			</div>
		</div>
	);
}

export default Noun;
