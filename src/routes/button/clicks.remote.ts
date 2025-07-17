import { command, query } from '$app/server';

let clicks = 0;

const sleep = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const getClicks = query(async () => {
	await sleep();
	return clicks;
});

export const incrementClicks = command(async () => {
	await sleep();
	clicks++;
});
