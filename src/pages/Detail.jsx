import { Card, CardFooter, Image } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
	const [products, setProducts] = useState([]);
	const [detail, setDetail] = useState({});
	const params = useParams();

	useEffect(() => {
		const detail_options = {
			menu: {
				title: 'Menu',
				endpoint:
					'https://my.api.mockaroo.com/products.json?key=ec38d5f0',
				object_key: 'product',
				object_img_key: 'img_url',
			},
			stores: {
				title: 'Stores',
				endpoint:
					'https://my.api.mockaroo.com/stores.json?key=ec38d5f0',
				object_key: 'store_name',
				object_img_key: 'store_url',

			},
			cart: {
				title: 'Cart',
				endpoint: 'https://my.api.mockaroo.com/products.json?key=ec38d5f0',
				object_key: 'product',
				object_img_key: 'img_url',
			},
		};

		setDetail(detail_options[params.type]);
		fetch(detail.endpoint)
			.then(response => response.json())
			.then(data => setProducts(data));
	}, [detail.endpoint, params.type]);

	return (
		<main className='h-screen bg-[url(https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col gap-4'>
			<header className='bg-sec flex justify-center items-center py-8'>
				<h1 className='text-main text-4xl'>{detail.title}</h1>
			</header>
			<section className='grid grid-cols-3 gap-4 p-4 overflow-y-auto'>
				{console.log(products)}
				{products.map(prod => (
					<Card
						isFooterBlurred
						className='border-none h-max'
						radius='lg'
					>
						
						<Image
							className='object-cover'
							height='200px'
							src={prod[detail.object_img_key]}
							width='100%'
						/>
						<CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
							<p>{prod[detail.object_key]}</p>
						</CardFooter>
					</Card>
				))}
			</section>
		</main>
	);
}
