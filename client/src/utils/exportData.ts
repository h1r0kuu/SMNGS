import JsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const tableToPdf = (reference, fileName: string) => {
    const doc = new JsPDF('p', 'pt', 'letter', )
    if(reference.current !== null) {
        doc.internal.pageSize.width = reference.current.offsetWidth
        doc.internal.pageSize.width = reference.current.offsetWidth
        autoTable(doc, {html: reference.current});
        doc.save(fileName);
    }
}