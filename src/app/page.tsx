import Image from "next/image";
import ImageEditor from "@/components/ImageEditor";

export default function Home() {


  async function createEdit(prompt: string) {
    "use server";

    // await prisma.edit.create({ data: { prompt, userId } });
    // revalidatePath("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <ImageEditor
            canGenerateEdits={true}
            createEdit={createEdit}
          />
    </main>
  );
}
