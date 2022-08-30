import { AxiosResponse } from "axios";
import { JSDOM } from "jsdom";
import { Course } from "./Course";

export async function parseResponse(response: AxiosResponse<any, any>): Promise<Course[]> {
    const webpage: JSDOM = new JSDOM(response.data);
    const elements: NodeListOf<Element> = webpage.window.document.querySelectorAll("a[aria-expanded=\"false\"]");

    const sep: string = "\t";
    let courses: Course[] = [];

    for (const a of elements) {
        if (a.textContent !== null) {
            const aCleanUp: string = a.textContent.replace(" ", sep).replace(String.fromCharCode(160, 45, 160), sep);

            const courseData: string[] = aCleanUp.split(sep);
            courses.push({
                prefix: courseData[0],
                num: courseData[1],
                name: courseData[2],
            });
        }
    }

    return courses;
}

export function parseURL(url: string): string[] {
    url = url.slice(url.indexOf("?"));

    const splitPoint: string = "page=";
    const parsedURL: string[] = [
        url.slice(0, url.indexOf(splitPoint) + splitPoint.length),
        url.slice(url.indexOf(splitPoint) + splitPoint.length + 1),
    ];

    return parsedURL;
}