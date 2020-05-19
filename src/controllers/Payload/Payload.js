/* eslint-disable no-param-reassign */
import { successResponce } from '../../utils/exchange';
import payloadModule from '../../helper/payload';
import payloadUtils from '../../utils/payload';

export default class Payload {
  static async readAll(req, res, next) {
    try {
      const payloadData = await payloadModule.get({
        url: req.params.url,
      });
      return successResponce(req, res, 'All Fetched', 202, payloadData.data);
    } catch (_error) {
      return next(_error);
    }
  }

  static async read(req, res, next) {
    try {
      const payloadData = await payloadModule.get({
        url: req.params.url,
      });
      const singleData = payloadData.data.find((p) => p.id.toString() === req.params.id);
      return successResponce(req, res, 'Fetched', 202, singleData);
    } catch (_error) {
      return next(_error);
    }
  }

  static async create(req, res, next) {
    try {
      const payloadData = await payloadModule.get({
        url: req.params.url,
      }).then((p) => p.get({ plain: true }));
      const newData = await payloadUtils.validIt([...payloadData.data, { ...req.body }]);
      const updatedData = await payloadModule.updateAny(
        { url: req.params.url },
        { data: newData },
      );
      if (updatedData[0] === 1) {
        return successResponce(req, res, 'Created', 202, newData);
      }
      throw new Error(`${req.params.url} :: Payload create inside failed of ${JSON.stringify({ ...req.body })}`);
    } catch (_error) {
      return next(_error);
    }
  }

  static async update(req, res, next) {
    try {
      const payloadData = await payloadModule.get({
        url: req.params.url,
      }).then((p) => p.get({ plain: true }));
      const updatedItem = { ...req.body, id: req.params.id };
      const newData = await payloadUtils.validIt(payloadData.data.map((p) => {
        if (p.id === req.params.id) {
          p = updatedItem;
        }
        return p;
      }));
      const updatedData = await payloadModule.updateAny(
        { url: req.params.url },
        { data: newData },
      );
      if (updatedData[0] === 1) {
        return successResponce(req, res, 'Updated', 202, updatedItem);
      }
      throw new Error(`${req.params.url} :: Payload create inside failed of ${JSON.stringify({ ...req.body })}`);
    } catch (_error) {
      return next(_error);
    }
  }

  static async delete(req, res, next) {
    try {
      const payloadData = await payloadModule.get({
        url: req.params.url,
      }).then((p) => p.get({ plain: true }));
      const newData = payloadData.data.filter((p) => p.id !== req.params.id);
      const updatedData = await payloadModule.updateAny(
        { url: req.params.url },
        { data: newData },
      );
      if (updatedData[0] === 1) {
        return successResponce(req, res, 'Deleted', 202, newData);
      }
      throw new Error(`${req.params.url} :: Payload create inside failed of ${JSON.stringify({ ...req.body })}`);
    } catch (_error) {
      return next(_error);
    }
  }
}
