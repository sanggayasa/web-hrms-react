const mapUser = ({
    user_id,
    username,
    name,
    name_client,
    name_org,
    is_active,
  }) => ({
    'user ID': user_id,
    username,
    name,
    client: name_client,
    organization: name_org,
    'is active': is_active,
  });
  
  module.exports = {mapUser};