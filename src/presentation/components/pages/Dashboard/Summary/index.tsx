import { FC } from 'react';
import { DashboardSummaryStyles } from '../../../../styles/components/pages/Dashboard/Summary';
import incomeIcon from '../../../../assets/income.svg';
import outcomeIcon from '../../../../assets/outcome.svg';
import totalIcon from '../../../../assets/total.svg';

export const Summary: FC = () => {
	return <DashboardSummaryStyles.Container>
		<DashboardSummaryStyles.SummaryItem className="income">
			<span>
				<legend>
					Entradas
				</legend>
				<img src={incomeIcon} alt="Entradas" />
			</span>
			<h2>
				R$ <strong>17.400</strong>,00
			</h2>
		</DashboardSummaryStyles.SummaryItem>
		<DashboardSummaryStyles.SummaryItem className="outcome">
			<span>
				<legend>
					Saídas
				</legend>
				<img src={outcomeIcon} alt="Saídas" />
			</span>
			<h2>
				R$ <strong>1.259</strong>,00
			</h2>
		</DashboardSummaryStyles.SummaryItem>
		<DashboardSummaryStyles.SummaryItem className="total">
			<span>
				<legend>
					Total
				</legend>
				<img src={totalIcon} alt="Total" />
			</span>
			<h2>
				R$ <strong>1.259</strong>,00
			</h2>
		</DashboardSummaryStyles.SummaryItem>
	</DashboardSummaryStyles.Container>;
};