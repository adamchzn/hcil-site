export const ROUTES = { homepage: "/", notebook: "/notebook/:notebookID" };

export function getNotebookRoute(notebookID) {
    const route = "/notebook/" + notebookID;
    return (route);
}