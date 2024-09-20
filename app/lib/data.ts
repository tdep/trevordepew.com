import { projects } from "@/app/ui/software-portfolio/utils/projects/projects"

const ITEMS_PER_PAGE = 2;

export async function fetchFilteredProjects(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        return projects.slice(offset);  // returns the projects list starting at offset for the index
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects.');
    }
}

export async function fetchProjectsPages(query: string) {
    try {
        const count = projects.length;
        const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of projects.');
    }
}

export async function fetchProjectById(id: string) {
    try {
        const project = projects.map((project) => {
            if (project.id === Number(id)) {
                return project;
            }
        });
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project.');
    }
}