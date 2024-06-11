import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Test,
});

function Test() {
	return <h5>here789</h5>;
}
