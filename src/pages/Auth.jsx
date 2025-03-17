import { Button, Image, Input, Link } from '@heroui/react';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { DonutBitten } from 'solar-icon-set';

export default function Auth() {
	const [password, setPassword] = useState('');

	return (
		<main className='flex flex-col min-h-screen'>
			<div className='flex-grow grid grid-cols-3'>
				<section className='col-span-2 bg-main w-full flex flex-col justify-center items-center'>
					<div className='flex flex-col justify-center items-center mb-8'>
						<DonutBitten
							className='text-sec'
							color='sec'
							size={64}
						/>
						<h1 className='text-4xl text-sec font-bold'>
							Too Good To Go
						</h1>
						<p className='text-md text-sec'>
							<FormattedMessage id='lema' />
						</p>
					</div>
					<Image
						src='https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						className='rounded-t-2xl'
						width={400}
					/>
				</section>
				<section className='flex-grow flex justify-center items-center col-span-1 bg-sec'>
					<div className='flex flex-col gap-3 w-[300px]'>
						<Input label={<FormattedMessage id='username' />} />
						<div>
							<Input
								label={<FormattedMessage id='password' />}
								value={password}
								onValueChange={setPassword}
								errorMessage={
									<FormattedMessage id='errorPassword' />
								}
								isInvalid={
									password.length < 5 || password.length > 8
								}
								type='password'
							/>
							<Link>
								<FormattedMessage id='forgotPassword' />
							</Link>
						</div>
						<Button as={Link} href='/home'>
							<FormattedMessage id='login' />
						</Button>
					</div>
				</section>
			</div>
		</main>
	);
}
