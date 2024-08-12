export default function Review({
  params,
}: {
  params: { id: string; reviewId: string };
}) {
  return (
    <h1>
      Review of Product {params.id} #{params.reviewId}
    </h1>
  );
}
