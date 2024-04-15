import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/31d0654f-bd7c-464f-a413-b7e0bff98fc7-hsg15n.jpg",
    "https://utfs.io/f/2a55fec9-6cff-4f50-9df6-767c278843aa-n1jiv2.jpg",
    "https://utfs.io/f/bf6502f6-0316-42e7-bcea-0f7212188fc7-5f1oio.jpg",
    "https://utfs.io/f/b39d7453-624a-4b31-a34a-beaf9df4cc2d-evuq2c.jpg"
  ]
  const mockImages = mockUrls.map((url, index) => ({
    id: index,
    url
  }))


  return (
    <main>
      <div className="flex gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id}>

            <img src={image.url} alt="image" className="w-48 object-cover" />

          </div>
        ))}
      </div>
    </main>
  );
}
