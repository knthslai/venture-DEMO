const schema = {
  users: [
    'admin_id',
    'email',
    'role',
    'created',
    'last_sign_in',
    'updated',
    'characters',
    'created'
  ],
  classes: [
    'name',
    'cards',
    'bonuses',
    'weaknesses',
    'theme',
    'icon',
    'description'
  ],
  characters: [
    'name',
    'classType',
    'health',
    'mana',
    'cards',
    'stats',
    'items',
    'picture',
    'created',
    'updated'
  ],
  cards: [
    'type',
    'class',
    'title',
    'icon',
    'description',
    'action',
    'cooldown',
    'sound',
    'created',
    'updated'
  ],
  campaigns: ['master', 'characters', 'events', 'scene', 'created', 'updated']
};

export default schema;
