import { usePageContext } from "../../../contexts/PageContext/PageManager";
import CostOfLivingPage from "./CostOfLiving";

const CostOfLivingPageWrapper: React.FC = () => {

    const { page, updatePage } = usePageContext();

    return(
        <div>
            {page == "costOfLiving" && <CostOfLivingPage/>}
        </div>
    );
}

export default CostOfLivingPageWrapper;