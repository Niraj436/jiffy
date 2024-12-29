import Container from '@/components/Container';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='bg-background max-w-[430px] mx-auto'>
			<Container>
				<div className='flex justify-between'>
					<div>Jiffy</div>
					<div>menu</div>
				</div>
			</Container>
		</div>
	);
}
