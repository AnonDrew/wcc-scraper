import { AxiosResponse } from "axios";
import { JSDOM } from "jsdom";

export async function parseResponse(response: AxiosResponse<any, any>): Promise<string[]> {
    let courses: string[] = [];
    const sep: string = "\t";

    const webpage: JSDOM = new JSDOM(response.data);
    const elements: NodeListOf<Element> = webpage.window.document.querySelectorAll("a[aria-expanded=\"false\"]");

    for (const a of elements) {
        if (a.textContent !== null) {
            courses.push(a.textContent.replace(" ", sep).replace(String.fromCharCode(160, 45, 160), sep));
        }
    }

    return courses;
}

export function parseURL(url: string): string[] {
    url = url.slice(url.indexOf("?") + 1);

    const splitPoint: string = "page=";
    const parsedURL: string[] = [
        url.slice(0, url.indexOf(splitPoint) + splitPoint.length),
        url.slice(url.indexOf(splitPoint) + splitPoint.length + 1),
    ];

    return parsedURL;
}