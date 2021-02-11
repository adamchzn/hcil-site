export const ROUTES = { homepage: "/", datasets: "/datasets", notebook: "/notebook/:notebookID" };

export function getNotebookRoute(notebookID) {
    const route = "/notebook/" + notebookID;
    return (route);
}