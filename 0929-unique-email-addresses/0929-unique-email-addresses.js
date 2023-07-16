/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    const map = new Map();
    
    emails.forEach(item => {
        let [name, domain] = item.split("@");
    
        name = name.replaceAll(".", "");
        const [one, two] = name.split("+");
    
        map.set(one +"@" + domain, true)        
    })
    
    return map.size
};