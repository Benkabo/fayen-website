export const DESTINATION_QUERY = `
*[_type == "post"]|order(publishedAt desc)[0...12]{
    _id, 
    title, 
    subtitle, 
    image, 
    details, 
    publishedAt
}`;
