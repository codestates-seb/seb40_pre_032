import React from 'react';

function Footer() {
	return (
		<footer className="h-80 text-gray-300 justify-evenly w-full bg-zinc-800 p-8">
			<nav className="text-sm flex flex-row justify-center font-bold">
				<div className="w-52">
					<h4 className="mb-4">STACK OVERFLOW</h4>
					<ul className="font-normal text-gray-500">
						<li className="mb-1">Questions</li>
						<li className="mb-1">Help</li>
					</ul>
				</div>
				<div className="w-40">
					<h4 className="mb-4">PRODUCTS</h4>
					<ul className="font-normal text-gray-500">
						<li className="mb-1">Teams</li>
						<li className="mb-1">Advertising</li>
						<li className="mb-1">Collectives</li>
						<li className="mb-1">Talent</li>
					</ul>
				</div>
				<div className="w-48">
					<h4 className="mb-4">COMPANY</h4>
					<ul className="font-normal text-gray-500">
						<li className="mb-1">About</li>
						<li className="mb-1">Press</li>
						<li className="mb-1">Work here</li>
						<li className="mb-1">Legal</li>
						<li className="mb-1">Privacy Policy</li>
						<li className="mb-1">Terms of Service</li>
						<li className="mb-1">Contact Us</li>
						<li className="mb-1">Cookie Settings</li>
						<li className="mb-1">Cookie Policy</li>
					</ul>
				</div>
				<div className="w-72">
					<h4 className="mb-4">STACK EXCHANGE NETWORK</h4>
					<ul className="font-normal text-gray-500">
						<li className="mb-1">Technology</li>
						<li className="mb-1">Culture & recreation</li>
						<li className="mb-1">Life & arts</li>
						<li className="mb-1">Science</li>
						<li className="mb-1">Professional</li>
						<li className="mb-1">Business</li>
						<li className="mb-1">API</li>
						<li className="mb-1">Data</li>
					</ul>
				</div>
				<div className="w-80 font-light text-xs text-gray-500">
					<div className="flex flex-row justify-between mb-48">
						<a href="https://stackoverflow.blog/?blb=1&_ga=2.120087560.1203393460.1666437014-1417885961.1665466480">
							<span>Blog</span>
						</a>
						<a href="https://stackoverflow.blog/?blb=1&_ga=2.120087560.1203393460.1666437014-1417885961.1665466480">
							<span>Facebook</span>
						</a>
						<a href="https://stackoverflow.blog/?blb=1&_ga=2.120087560.1203393460.1666437014-1417885961.1665466480">
							<span>Twitter</span>
						</a>
						<a href="https://stackoverflow.blog/?blb=1&_ga=2.120087560.1203393460.1666437014-1417885961.1665466480">
							<span>Linkedin</span>
						</a>
						<a href="https://stackoverflow.blog/?blb=1&_ga=2.120087560.1203393460.1666437014-1417885961.1665466480">
							<span>Instagram</span>
						</a>
					</div>
					<div className="flex flex-col font-normal text-xs mb-4">
						<p>Site design / logo © 2022 Stack Exchange Inc; user</p>
						<p>
							contributions licensed under{' '}
							<a
								className="underline"
								href="https://stackoverflow.com/help/licensing"
							>
								CC BY-SA.
							</a>
						</p>
						<p>rev 2022.10.25.33519</p>
					</div>
				</div>
			</nav>
		</footer>
	);
}
export default Footer;
