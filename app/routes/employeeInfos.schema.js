const getByIdSchema = {
  schema: {
    headers: {
      description: 'Request header',
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: { type: 'string' }
      }
    },
    params: {
      type: 'object',
      properties: {
        id: { type: 'number' }
      }
    },
    response: {
      headers: {
        description: 'response header',
        type: 'object',
        properties: {
          Authorization: { type: 'string' }
        }
      },
      // 200: {
      //   description: 'Successful response',
      //   type: 'object',
      //   properties: {
      //     id: { type: 'number' },
      //     name: { type: 'string' },
      //     courses_count: { type: 'number' },
      //     image_url: { type: 'string' },
      //     created_at: { type: 'string' },
      //     updated_at: { type: 'string' }
      //   }
      // },
      422: {
        description: 'Validation errors',
        type: 'object',
        properties: {
          errors: { type: 'array', items: { type: 'string' } }
        }
      }
    }
  }
};

const listSchema = {
  schema: {
    headers: {
      description: 'Request header',
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: { type: 'string' }
      }
    },
    response: {
      headers: {
        description: 'response header',
        type: 'object',
        properties: {
          Authorization: { type: 'string' }
        }
      },
      // 200: {
      //   description: 'Successful response',
      //   type: 'array',
      //   items: {
      //     type: 'object',
      //     properties: {
      //       id: { type: 'number' },
      //       name: { type: 'string' },
      //       image_url: { type: 'string' },
      //       courses_count: { type: 'number' },
      //       created_at: { type: 'string' },
      //       updated_at: { type: 'string' }
      //     }
      //   }
      // },
      422: {
        description: 'Validation errors',
        type: 'object',
        properties: {
          errors: { type: 'array', items: { type: 'string' } }
        }
      }
    }
  }
};

module.exports = {
  listSchema,
  getByIdSchema
};
