import type ICategories from "@/interfaces/ICategories";

export async function getCategories(): Promise<ICategories[]> {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');

    return response.json();
}