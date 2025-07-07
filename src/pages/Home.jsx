import {Card} from 'primereact/card';
import React from 'react';

function Home() {
	return (
			<Card title="E-Mail Signature">
				<div>
					<ul>
						<li>
							<a href="https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index">
								Public GPG-Key
							</a>
						</li>
					</ul>
				</div>
			</Card>
	);
}

export default Home;