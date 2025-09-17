use std::collections::BTreeMap;
use ethrex_l2::based::{
    block_fetcher::{BlockFetcher, BlockFetcherHealth, CallMessage as BlockFetcherCallMessage},
    state_updater::{StateUpdater, StateUpdaterHealth, CallMessage as StateUpdaterCallMessage},
};
use ethrex_common::Address;
use spawned_concurrency::tasks::GenServer;

#[tokio::test]
async fn test_based_health_structures() {
    // Test StateUpdaterHealth serialization
    let state_updater_health = StateUpdaterHealth {
        eth_client_healthcheck: BTreeMap::new(),
        on_chain_proposer_address: Address::zero(),
        sequencer_registry_address: Address::zero(),
        sequencer_address: Address::zero(),
        check_interval_ms: 1000,
        sequencer_state: "Following".to_string(),
    };
    
    let json = serde_json::to_string(&state_updater_health).unwrap();
    println!("StateUpdaterHealth JSON: {}", json);
    
    // Test BlockFetcherHealth serialization
    let block_fetcher_health = BlockFetcherHealth {
        eth_client_healthcheck: BTreeMap::new(),
        on_chain_proposer_address: Address::zero(),
        fetch_interval_ms: 5000,
        last_l1_block_fetched: "100".to_string(),
        fetch_block_step: "1000".to_string(),
        sequencer_state: "Syncing".to_string(),
    };
    
    let json = serde_json::to_string(&block_fetcher_health).unwrap();
    println!("BlockFetcherHealth JSON: {}", json);
    
    // Test CallMessage enums exist
    let _state_updater_call = StateUpdaterCallMessage::Health;
    let _block_fetcher_call = BlockFetcherCallMessage::Health;
    
    println!("✅ All based health check structures compile and serialize correctly!");
}
