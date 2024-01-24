import Image from 'next/image';
import Search from '@/app/ui/search';
import {
    Character,
} from '@/app/lib/definitions';

export default async function CharacterTable({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <div className="w-full">
      <h1 className={`mb-8 text-xl md:text-2xl`}>
        Players
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {characters?.map((character) => (
                  <div
                    key={character.initiative}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={character.image_url}
                              className="rounded-full"
                              alt={`${character.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{character.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                   <p>{character.race}</p>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{character.class}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
