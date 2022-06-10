let states = [
    {"author": "Daniil", "date": Date(), "id": 1, "text": "интересная статья", "topic": "topic1"},
    {"author": "Daniil2", "date": Date(), "id": 2,  "text": "интересная статья 2", "topic": "topic2"},
    {"author": "Daniil3", "date": Date(), "id": 3,  "text": "интересная статья 3", "topic": "topic3"},
    {"author": "Daniil4", "date": Date(), "id": 4,  "text": "интересная статья 4", "topic": "topic4"}
]

//получить пост
module.exports.getState = function(id) {
    for(let i = 0; i < states.length; i++) {
        if (states[i].id == id) {
            return states[i]
        }
    }
    return null
}

module.exports.date = states //обращаемся к массиву