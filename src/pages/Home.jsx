import { Card, Link } from '@heroui/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CartLarge, Ladle, Shop } from 'solar-icon-set';

export default function Home() {
	const options = [
		{
			icon: <Ladle size={150} className='text-sec' color='sec' />,
			label: <FormattedMessage id='menu' />,
			path: '/home/menu',
			key: 1,
		},
		{
			icon: <Shop size={150} className='text-sec' color='sec' />,
			label: <FormattedMessage id='stores' />,
			path: '/home/stores',
			key: 2,
		},
		{
			icon: <CartLarge size={150} className='text-sec' color='sec' />,
			label: <FormattedMessage id='cart' />,
			path: '/home/cart',
			key: 3,
		},
	];

	return (
		<div className='flex justify-center items-center h-screen bg-[url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center'>
			<Card
				isBlurred
				className='flex flex-row justify-center items-center gap-4 p-12 bg-sec/[0.8]'
			>
				{options.map(option => (
					<Link href={option.path} size='sm' key={option.key}>
						<Card
							isPressable
							isBlurred
							className='flex flex-col items-center justify-center gap-2 w-[300px] h-[300px] bg-main/[0.8] p-4'
						>
							{option.icon}
							<p className='text-2xl text-sec'>{option.label}</p>
						</Card>
					</Link>
				))}
			</Card>
		</div>
	);
}
