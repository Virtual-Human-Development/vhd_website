import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageLink from '../components/ImageLink'; // Import the ImageLink component
import { useTheme } from '../context/ThemeContext';

import Team from '../components/Team';
import { memberList } from '../data/memberList';
import { MemberListProps } from '../types';

export default function Home() {
	const { theme } = useTheme(); // Using theme from ThemeContext
	const groups = ["Advisory Board", "Core Team Members, Theoretical", "Core Team Members, Experimental", "Trainee Council", "Trainee Members"]; // Add more groups as needed
	const getMembersByGroup = (groupName: string): MemberListProps[] => {
		return memberList.filter(member => member.group === groupName);
	};

	return (
		<div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
			<Head>
				<title>VHD Website</title>
				<meta name="description" content="VHD Website" />
			</Head>

			<Navbar />

			{/* Section 1: 5/5 columns */}
			<main className="max-w-6xl mx-auto px-4 pt-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

					{/* Left Column */}
					<div className="md:col-span-1 flex items-end justify-start">
						<h2 className="text-5xl font-bold text-right" style={{ color: 'var(--text-color)' }}>
							THE VHD TEAM
						</h2>
					</div>

					{/* Right Column */}
					<div className="md:col-span-4 flex justify-start">
						<Image src="/team_2.png" alt="Placeholder" width={1000} height={100} className="rounded-lg shadow-lg" />
					</div>
				</div>
			</main>

			{/* Divider Line */}
			<div className="w-full">
				<div className="max-w-6xl mx-auto h-px bg-white my-12"></div>
			</div>

			{/* Section 2: 2/2 columns */}
			<main className="max-w-6xl mx-auto sm:px-6 lg:px-8 py-6">
				<div className="grid grid-cols-10 gap-8">

					{/* Left Spacer */}
					<div className="col-span-1"></div>

					{/* Center Column */}
					<div className="col-span-8">
						<p className="text-sm mb-8" style={{ color: 'var(--secondary-text-color)' }}>
							Co-founded by Drs.<span className="pl-1" style={{ color: 'var(--text-color)' }}>Maria Abou Chakra, Nozomu Yachie, and Nika Shakiba, </span>
							who act as the Founding Directors of the consortium.
							Under their leadership, the consortium now consists of over 40 world leading scientists and their teams, bridging
							experimentalists and theoreticians. The consortium strategically intersects experts and technologies from divergent
							disciplines to drive robust experiment-to-theory research cycles. The consortium leverages expertise in stem cells
							and developmental biology, stem cell bioengineering, synthetic biology, systems biology, evolutionary biology,
							bioinformatics, machine learning, mathematical biology. We are also actively recruiting in the area of bioethics.
						</p>
					</div>

					{/* Right Spacer */}
					<div className="col-span-1"></div>

				</div>
			</main>




			{groups.map(groupName => (
				<main key={groupName} className="max-w-4xl mx-auto pt-10 px-4 sm:px-6 lg:px-8 py-12">
					<h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>
						{groupName}
					</h2>
					<Team memberList={getMembersByGroup(groupName)} />
				</main>
			))}

			<Footer />
		</div>
	);
}
