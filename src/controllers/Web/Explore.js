import Sequelize from 'sequelize';
import BigNumber from 'big-number';
import {
  successResponce,
} from '../../utils/exchange';
import payloadModule from '../../helper/payload';
import pageCalculation from '../../utils/page';

const { Op } = Sequelize;
export default class Explore {
  static async readAll(req, res, next) {
    try {
      const sortBy = req.body.sortBy || 'createdAt';
      const orderBy = req.body.orderBy || 'DESC';
      const queryBy = req.body.search || '';
      let whereIs = {
        status: 'active',
        visibility: 'public',
      };
      if (queryBy) {
        const searchData = queryBy.split(' ');
        const mapData = [];
        searchData.map((s) => {
          mapData.push({
            title: {
              [Op.iLike]: `%${s}%`,
            },
          });
          mapData.push({
            description: {
              [Op.iLike]: `%${s}%`,
            },
          });
          mapData.push({
            keywords: {
              [Op.contains]: [`${s}`],
            },
          });
          return s;
        });
        const finalData = {
          [Op.or]: mapData,
        };
        whereIs = { ...whereIs, ...finalData };
      }
      const totalItems = await payloadModule.countBy(whereIs);
      const page = await pageCalculation(req.body, totalItems);
      const payloadData = await payloadModule.getAll(whereIs, {
        offset: page.offset,
        limit: page.limit,
        order: [
          [sortBy, orderBy],
        ],
      });
      return successResponce(
        req,
        res,
        'All our payload fetched successfully',
        202,
        payloadData, {
          page,
          search: {
            queryBy,
            sortBy,
            orderBy,
          },
        },
      );
    } catch (_error) {
      return next(_error);
    }
  }

  static async read(req, res, next) {
    try {
      const payloadData = await payloadModule.get({
        id: req.params.id,
        status: 'active',
        visibility: 'public',
      });
      payloadModule.updateAny({ id: req.params.id },
        { viewCount: BigNumber(payloadData.viewCount).plus(1) });
      return successResponce(
        req,
        res,
        'Your payload fetched successfully',
        202,
        payloadData,
      );
    } catch (_error) {
      return next(_error);
    }
  }
}
