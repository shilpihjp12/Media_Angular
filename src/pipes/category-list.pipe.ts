import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'categoryList',
    standalone: false
})

export class CategoryListPipe implements PipeTransform {
    transform(mediaItems: Array<{ category: string }> | null | undefined): string {
        const categories = new Set<string>();
        mediaItems?.forEach(item => categories.add(item.category));
        return Array.from(categories).join(",");
    }
}