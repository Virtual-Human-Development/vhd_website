import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageLink from '../components/ImageLink';
import { useTheme } from '../context/ThemeContext';
import { blogPosts } from '../data/blogPosts';

export default function Home() {
	const { theme } = useTheme();

	return (
		<div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
			<Head>
				<title>VHD Website</title>
				<meta name="description" content="VHD Website" />
			</Head>

			<Navbar />

			<header className="text-center pt-20 pb-16" style={{ color: 'var(--text-color)' }}>
				<div className="max-w-xl mx-auto px-4">
					<h1 className="text-3xl font-bold" style={{ color: 'var(--text-color)' }}>
						Unlocking the marvels of human development so we can understand disease and program cells for regenerative medicine.
					</h1>
				</div>
			</header>

			<main className="max-w-3xl mx-auto px-3 sm:px-5 lg:px-6 py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<h2 className="text-md font-bold" style={{ color: 'var(--text-color)' }}>
							Developing a model of human embryology
						</h2>
						<p className="text-sm mt-3" style={{ color: 'var(--secondary-text-color)' }}>
							We&#39;re creating a simulator capable of predicting multicellular developmental outcomes. By bringing together mathematical modeling, laboratory experiments and state-of-the-art computer science, the VHD consortium is helping usher in the next-generation of embryo modeling toward novel disease cures.
						</p>
					</div>
					<Image src="/vhd_banner_1.jpg" alt="Placeholder" width={320} height={320} className="rounded-lg shadow-lg" />
				</div>
			</main>

			<main className="max-w-3xl mx-auto px-3 sm:px-5 lg:px-6 py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<h2 className="text-md font-bold" style={{ color: 'var(--text-color)' }}>
							Join the community and make a difference.
						</h2>
						<p className="text-sm mt-3" style={{ color: 'var(--secondary-text-color)' }}>
							Join our consortium to make a positive impact. Connect with like-minded scientists and stay up-to-date on modeling developments.
						</p>
						<Link href="/team">
							<button className="mt-5 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
								View all members
							</button>
						</Link>
					</div>
					<Image src="/vhd_meeting_1.jpg" alt="Placeholder" width={320} height={320} className="rounded-lg shadow-lg" />
				</div>
			</main>

			<main className="py-10" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
				<div className="max-w-3xl mx-auto px-3 sm:px-5 lg:px-6">
					<h2 className="text-md font-bold" style={{ color: 'var(--text-color)' }}>Latest Updates from our blog</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
						{blogPosts.slice(0, 4).map((post) => (
							<div key={post.id} className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--entry-background-color)' }}>
								<Link href={`/blog`} passHref>
									<Image src={post.imgSrc} alt={post.title} width={320} height={200} className="w-full h-auto" layout="responsive" />
									<div className="p-3">
										<h3 className="text-sm font-bold" style={{ color: 'var(--text-color)', fontSize: '0.72rem' }}>{post.title}</h3>
										<p className="text-xs pt-3" style={{ color: 'var(--secondary-text-color)', fontSize: '0.64rem' }}>{post.subtitle}</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
