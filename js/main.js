// Random Chapter

function newChapter() {
    var randomNumber = Math.floor(Math.random() * (chapters.length));
    document.getElementById('chapterDisplay').innerHTML = chapters[randomNumber];
}

// Modal Window

// Tao Te Ching Chapters
var chapters = [
    '<h2>1</h2><br />
    The tao that can be told
    is not the eternal Tao
    The name that can be named
    is not the eternal Name.
    
    The unnamable is the eternally real.
    Naming is the origin
    of all particular things.
    
    Free from desire, you realize the mystery.
    Caught in desire, you see only the manifestations.
    
    Yet mystery and manifestations
    arise from the same source.
    This source is called darkness.
    
    Darkness within darkness.
    The gateway to all understanding.',
    
    '<h2>2</h2><br />
    When people see some things as beautiful,
    other things become ugly.
    When people see some things as good,
    other things become bad. Being and non-being create each other.
    Difficult and easy support each other.
    Long and short define each other.
    High and low depend on each other.
    Before and after follow each other. Therefore the Master
    acts without doing anything
    and teaches without saying anything.
    Things arise and she lets them come;
    things disappear and she lets them go.
    She has but doesn\'t possess,
    acts but doesn\'t expect.
    When her work is done, she forgets it.
    That is why it lasts forever.',

    '<h2>3</h2><br />
    If you overesteem great men,
    people become powerless.
    If you overvalue possessions,
    people begin to steal. The Master leads
    by emptying people's minds
    and filling their cores,
    by weakening their ambition
    and toughening their resolve.
    He helps people lose everything
    they know, everything they desire,
    and creates confusion
    in those who think that they know. Practice not-doing,
    and everything will fall into place.',

    '<h2>4</h2>
    The Tao is like a well:
    used but never used up.
    It is like the eternal void:
    filled with infinite possibilities. It is hidden but always present.
    I don't know who gave birth to it.
    It is older than God.',
    
    '<strong>Chapter 3</strong><br />',
    '<strong>Chapter 4</strong><br />',
    '<strong>Chapter 5</strong><br />',
    '<strong>Chapter 6</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
    '<strong>Chapter 1</strong><br />',
]