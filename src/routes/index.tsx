import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="container py-12">
      <h1 className="text-dark-100 text-2xl">Main Page</h1>
    </div>
  );
}
